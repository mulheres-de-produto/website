
export default function SectionTemplate({children}) {
    return (
      <section className="flex-1 py-14">
        <div className="md:max-w-full md:px-6 md:mx-auto md:mt-28 md:ml-16 m-14">
          <div className="flex flex-col justify-end w-auto h-full text-left">
            {children}
          </div>
        </div>
      </section>
    )
  }