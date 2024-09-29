import React from 'react';


function EDA() {

  return (
    <section className="page-section bg-light" id="EDA" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">EDA</h2>
          <h3 className="section-subheading text-muted">Here are some graphs and plots of our data.</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe src="/heat_map.html" width="100%" height="850"></iframe>
        </div>
        <p className="text-muted">This heatmap demonstrates the correlation between all factors of a song. There’s not a lot of prominent strong correlational relationships but there are two that have a somewhat high correlation. Speechiness and danceability have a negative correlation of -0.73, while energy and speechiness have a negative correlation of -0.59. Overall, there are not very distinct correlations but there are two that stand out. </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <iframe src="/fig2.html" width="100%" height="650"></iframe>
          <iframe src="/fig1.html" width="100%" height="650"></iframe>
        </div>

        <p className="text-muted">With the bar graph on the left, we looked at 9 different English-speaking genres. The top 3 genres are pop-film, chill, and sad. However, there is no correlation with danceability and their popularity since it’s very varied. The bar graph on the right, however, shows the top 9 Spanish-speaking genres. Sertanejo, Brazil, and Spanish are the top 3 genres in this category. Their danceabilities are mainly the lowest in this graph, though. The less popular ones such as latin or reggaeton actually have higher danceability. We can see some correlation between popularity and danceability of Spanish-speaking genres. Although danceability and popularity may not have a correlation with English songs, there is some slight relationship between them in Spanish-speaking genres!</p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe src="/valdan.html" width="100%" height="600"></iframe>
        </div>
        <p className="text-muted">This scatterplot illustrates the relationship between valence and danceability. As the music positiveness, also known as valence, of a song increases, the danceability of the song increases as well. This means a higher valence makes it easier for an individual to dance throughout the duration of the song.</p> 

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe src="/loudness_tempo_graph.html" width="100%" height="600"></iframe>
        </div>
        <p className="text-muted">This graph demonstrates the slight positive relationship between tempo and loudness. It also illustrates how danceability also somewhat increases as loudness does. The danceability is highest at tempos 80 to 130 and loudness above -20.</p> 

        <p className="text-muted">These patterns are just some of the ways our model can predict the genre best suited for your taste!</p>
      </div>
    </section>

  );
}

export default EDA;
