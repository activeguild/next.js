import { Head } from "../components/head";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Head title="Home" />
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}
