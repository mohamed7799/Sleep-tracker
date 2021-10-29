import Highlight from "./highlight";

const HighlightList = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl text-primary font-bold">Entries`s Highlights</h2>
      <ul className="grid justify-center gap-6 md:grid-cols-2 mt-6">
        <Highlight></Highlight>
        <Highlight></Highlight>
        <Highlight></Highlight>
        <Highlight></Highlight>
      </ul>
    </section>
  );
};

export default HighlightList;
