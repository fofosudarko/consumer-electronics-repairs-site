// Avatar.js

import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { BsFileImage } from 'react-icons/bs';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function Avatar({ media, avatarHeight, avatarWidth, isSquare, isAccount }) {
  const { url, name } = media ?? {};
  const { isLargeDevice } = useDeviceDimensions();

  if (isLargeDevice) {
    avatarHeight += 3;
    avatarWidth += 3;
  }

  return url ? (
    <div style={{ height: avatarHeight, width: avatarWidth }}>
      <Image
        className={`${!isSquare ? 'rounded-circle' : undefined}`}
        src={url}
        height={avatarHeight}
        width={avatarWidth}
        alt={name}
      />
    </div>
  ) : isAccount ? (
    <FaUserCircle size={25} className="text-secondary fs-normal" />
  ) : (
    <BsFileImage size={25} className="fs-normal" />
  );
}

Avatar.propTypes = {
  media: PropTypes.object,
  isSquare: PropTypes.bool,
  avatarHeight: PropTypes.number,
  avatarWidth: PropTypes.number,
  isAccount: PropTypes.bool,
};
Avatar.defaultProps = {
  media: null,
  isSquare: false,
  avatarHeight: 30,
  avatarWidth: 30,
  isAccount: false,
};

export default Avatar;
