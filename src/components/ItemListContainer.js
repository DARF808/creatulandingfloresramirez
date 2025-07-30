// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={styles.section}>
      <h2>{greeting}</h2>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default ItemListContainer;
