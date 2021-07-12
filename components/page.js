import Link from "next/link";

function Page({ linkTo, NavigateTo, title }) {
  return (
    <div className="page">
      <nav className="navigation">
        <Link href={linkTo}>
          <a className="navButton">{NavigateTo}</a>
        </Link>
      </nav>
      <h1>{title}</h1>
    </div>
  );
}

export default Page;
