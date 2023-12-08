export default function Stats({ item }) {
  if (!item.length)
    return (
      <footer className="stats">
        {" "}
        <p>Start adding some new items to your packing list</p>{" "}
      </footer>
    );
  const numItem = item.length;
  const packedItem = item.filter((item) => item.packed).length;
  const prcentage = Math.round((packedItem / numItem) * 100);

  return (
    <footer className="stats">
      <p>
        {prcentage === 100
          ? "You got everything! Ready to go ✈"
          : `🧳 You have ${numItem} items on your list, and you already packed${" "}
        ${packedItem} (${prcentage >= 0 ? prcentage : 0} %)`}
      </p>
    </footer>
  );
}
