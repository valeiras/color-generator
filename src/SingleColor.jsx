const SingleColor = ({ color, idx, half }) => {
  const { hex, weight } = color;
  return (
    <article
      className={idx > half ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
