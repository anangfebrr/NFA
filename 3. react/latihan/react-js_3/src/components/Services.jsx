import React from 'react'
import styles from "../styles/Services.module.css"
import services from "../Utils/services"

function Services() {
  return (
    <section className={styles.services}>
        <h2 className={styles.title}>Layanan Kami</h2>
        <div className={styles.cardContainer}>
            {services.map((service) => (
            <div key={service.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Services