// Placeholder.js

import Image from 'next/image';

function Placeholder() {
  return (
    <div className="my-2 d-flex justify-content-center 100-vh bg-white">
      <Image
        src="/img/undraw_void_3ggu.png"
        alt="undraw_void_3ggu.png"
        height={1038}
        width={995}
      />
    </div>
  );
}

Placeholder.propTypes = {};
Placeholder.defaultProps = {};

export default Placeholder;
