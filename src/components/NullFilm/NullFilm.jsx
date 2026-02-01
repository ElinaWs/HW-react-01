export default function NullFilm({ reaction, onLike, onDislike }) {
  return (
    <div>
      <button
        onClick={onLike}
        style={{ backgroundColor: reaction === "like" ? "lightgreen" : "white" }}
      >
        Like
      </button>

      <button
        onClick={onDislike}
        style={{ backgroundColor: reaction === "dislike" ? "salmon" : "white" }}
      >
        Dislike
      </button>
    </div>
  )
}
