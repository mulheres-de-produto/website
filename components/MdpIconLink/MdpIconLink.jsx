import Link from "next/link";
import MdpIcon from "./MdpIcon";

export default function MdpIconLink() {
  return (
    <Link href="/">
      <a className="flex items-center justify-start p-0 px-6 mdp-icon-link">
        <MdpIcon />
      </a>
    </Link>
  );
}
