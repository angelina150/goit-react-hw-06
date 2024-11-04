import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.item} key={id}>
      <div className={css.infoWrapper}>
        <p className={css.info}> 👤 {name}</p>
        <p className={css.info}> 📞 {number}</p>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
