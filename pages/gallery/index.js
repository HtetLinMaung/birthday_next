import styles from "../../styles/Gallery.module.scss";

export default function Gallery() {
  return (
    <div className="container">
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "2rem" }}
      >
        <div className="col-md-6">
          <input
            className={styles.searchInput}
            placeholder="Search by label or date"
          />
        </div>
      </div>
    </div>
  );
}
