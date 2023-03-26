// MediaPlayerContainer.js

import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import { useWindowDimensions, useNotificationHandler } from 'src/hooks';

import {
  PlayButton,
  PauseButton,
  StopButton,
  SaveButton,
  FullScreenButton,
  RecordButton,
  CloseButton,
} from '../ControlButtons';

function MediaPlayerContainer({
  show,
  onHide,
  defaultWidth,
  defaultHeight,
  videoRef,
  videoProps,
  playMedia,
  onPlayMedia,
  stopMedia,
  onStopMedia,
  pauseMedia,
  onPauseMedia,
  recordMedia,
  onRecordMedia,
  saveMedia,
  onSaveMedia,
  ShowHelp,
  text,
  autoPlay,
  title,
  isStreaming,
  isLoading,
  loadingText,
}) {
  const [fullScreen, setFullScreen] = useState(false);

  const { windowHeight, windowWidth } = useWindowDimensions();

  const [height, setHeight] = useState(
    windowHeight > defaultHeight ? defaultHeight : windowHeight
  );
  const [width, setWidth] = useState(
    windowWidth > defaultWidth ? defaultWidth : windowWidth
  );
  const [extendHeight, setExtendHeight] = useState(false);

  const handleNotification = useNotificationHandler();

  useEffect(() => {
    if (windowHeight && windowWidth) {
      setHeight(windowHeight > defaultHeight ? defaultHeight : windowHeight);
      setWidth(windowWidth > defaultWidth ? defaultWidth : windowWidth);
      setExtendHeight(windowHeight <= defaultHeight);
    }
  }, [defaultHeight, defaultWidth, windowHeight, windowWidth]);

  const containerRef = useCallback(
    async (node) => {
      try {
        if (node) {
          if (node.requestFullscreen) {
            if (fullScreen) {
              await node.requestFullscreen();
            } else if (document.fullscreenElement) {
              await document.exitFullscreen();
            }
          }
        }
      } catch (error) {
        handleNotification(error);
      }
    },
    [fullScreen, handleNotification]
  );

  const handleFullScreen = useCallback(() => {
    setFullScreen((state) => !state);
  }, []);

  return show ? (
    <div
      className="modal-backdrop bg-dark text-light"
      height={height}
      width={width}
      ref={containerRef}
      style={{ opacity: '100%' }}
    >
      <div className="modal visible d-flex justify-content-center">
        <div
          className={`position-relative ${!fullScreen ? 'm-auto' : ''} ${
            !extendHeight ? 'shadow-sm' : ''
          } ${fullScreen ? 'overflow-hidden' : 'overflow-auto'}`}
          width={fullScreen ? windowWidth : width}
          height="auto"
        >
          <video
            {...videoProps}
            ref={videoRef}
            autoPlay={autoPlay}
            width={fullScreen ? windowWidth : width}
            height={extendHeight ? windowHeight : 'auto'}
            className="rounded-3"
          />
          <div
            className={`position-absolute top-0 bottom-0 d-flex flex-column ${
              isLoading
                ? 'align-items-center justify-content-center'
                : 'justify-content-between'
            } bg-transparent w-100 h-100`}
          >
            {isLoading ? (
              <div className="d-flex flex-row">
                <Spinner animation="grow" size="lg" variant="success" />
                <div className="d-flex align-self-center ps-2">
                  {loadingText}
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex justify-content-between pt-1 px-2">
                  <div className="fs-5">{title}</div>
                  <div>
                    <div className="d-flex flex-row justify-content-between">
                      {isStreaming && playMedia ? (
                        <div className="d-flex flex-row pe-2">
                          <Spinner
                            variant="danger"
                            size="xs"
                            animation="grow"
                          />
                          <div className="d-flex align-self-center ms-2">
                            LIVE
                          </div>
                        </div>
                      ) : null}
                      {recordMedia ? (
                        <div className="d-flex flex-row pe-2">
                          <Spinner variant="info" size="xs" animation="grow" />
                          <div className="d-flex align-self-center ms-2">
                            REC
                          </div>
                        </div>
                      ) : null}
                      <CloseButton onClick={onHide} />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  {onPlayMedia ? (
                    <PlayButton
                      onClick={onPlayMedia}
                      playMedia={playMedia}
                      text={text}
                    />
                  ) : null}
                  {onPauseMedia ? (
                    <PauseButton
                      onClick={onPauseMedia}
                      pauseMedia={pauseMedia}
                      text={text}
                    />
                  ) : null}
                  {onStopMedia ? (
                    <StopButton
                      onClick={onStopMedia}
                      stopMedia={stopMedia}
                      text={text}
                    />
                  ) : null}
                  {onSaveMedia ? (
                    <SaveButton
                      onClick={onSaveMedia}
                      saveMedia={saveMedia}
                      text={text}
                    />
                  ) : null}
                  {onRecordMedia ? (
                    <RecordButton
                      onClick={onRecordMedia}
                      recordMedia={recordMedia}
                      text={text}
                    />
                  ) : null}
                  <FullScreenButton
                    onClick={handleFullScreen}
                    fullScreen={fullScreen}
                  />
                  {ShowHelp}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

MediaPlayerContainer.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  videoRef: PropTypes.func,
  videoProps: PropTypes.object,
  playMedia: PropTypes.bool,
  onPlayMedia: PropTypes.func,
  stopMedia: PropTypes.bool,
  onStopMedia: PropTypes.func,
  pauseMedia: PropTypes.bool,
  onPauseMedia: PropTypes.func,
  recordMedia: PropTypes.bool,
  onRecordMedia: PropTypes.func,
  saveMedia: PropTypes.bool,
  onSaveMedia: PropTypes.func,
  ShowHelp: PropTypes.node,
  text: PropTypes.string,
  autoPlay: PropTypes.bool,
  title: PropTypes.string,
  isStreaming: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
};
MediaPlayerContainer.defaultProps = {
  show: false,
  onHide: undefined,
  defaultWidth: 1280,
  defaultHeight: 1024,
  videoRef: undefined,
  videoProps: null,
  playMedia: false,
  onPlayMedia: undefined,
  stopMedia: false,
  onStopMedia: undefined,
  pauseMedia: false,
  onPauseMedia: undefined,
  recordMedia: false,
  onRecordMedia: undefined,
  saveMedia: false,
  onSaveMedia: undefined,
  ShowHelp: null,
  text: null,
  autoPlay: false,
  title: 'Media Player',
  isStreaming: false,
  isLoading: false,
  loadingText: 'Loading your stream...',
};

export default MediaPlayerContainer;
