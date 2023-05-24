import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Foots</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>

      <div className="filters mt-4">
        <div className="btn-group">
          <button className="btn btn-active">Road</button>
          <button className="btn">Trail</button>
          <button className="btn">Track</button>
          <button className="btn">Race</button>
        </div>
      </div>

      <div className="shoes mt-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              width={400}
              height={100}
              alt="Picture of the author"
            /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Nike Green 12
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>From: £100</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Track</div>
              <div className="badge badge-outline">Race</div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
