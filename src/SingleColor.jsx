import { toast } from 'react-toastify';

const SingleColor = ({ color, idx, half }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={idx > half ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
