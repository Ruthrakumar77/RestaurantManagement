function EventsList() {
    return (
        <>
            <ul className="list bg-base-100 shadow-lg h-full overflow-y-scroll no-scrollbar rounded-md">
                <li className="p-4 pb-2 text-2xl font-semibold text-center tracking-wide text-orange-400">UPCOMING EVENTS</li>
                <li className="list-row relative p-2">
                    <div>
                        <div className="text-md font-semibold">Birthday Party</div>
                        <div className="text-xs uppercase font-semibold opacity-60">10/02/2023</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        A birthday event for 20 people on the roof top
                    </p>
                    <div className="absolute top-0 right-0">
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </div>
                </li>
                <li className="list-row relative p-2">
                    <div>
                        <div className="text-md font-semibold">Aniversery Party</div>
                        <div className="text-xs uppercase font-semibold opacity-60">20/02/2023</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        An aniversery event for 20 people on the roof top
                    </p>
                    <div className="absolute top-0 right-0">
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </div>
                </li>
            </ul>
        </>
    )
}
export default EventsList