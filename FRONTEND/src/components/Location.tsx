import styles from "./Location.module.css";
const Location=()=>{
    return(
        <div className={styles.locationContainer}>
         <h3>Puedes encontrarnos en</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.448239960281!2d-68.840852623406!3d-32.88631516884552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1682800496162!5m2!1ses-419!2sar" width="600" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
export default Location;