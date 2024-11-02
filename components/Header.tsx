import Image from "next/image";

const Header = ({ imageURL, name }: { imageURL: string; name: string }) => {
  return (
    <div>
      <Image
        src={imageURL}
        alt={`${name} image`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "30vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default Header;
