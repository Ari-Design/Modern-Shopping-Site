import React from 'react';

const styles = {
  thumbnail: {
    width: 300,
    margin: 'auto'
  },
  media: {
    height: '100%',
    width: '100%'
  }
};

class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('look here', window.document);
    return <img style={styles.media} src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"></img>;
  }
};

export default Gallery;