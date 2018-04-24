// import { Constructor } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#button').click(function() {
    $('#button').hide();

    setInterval(() => {
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/random?api_key=4I9kvsugGmh4t6fV6RfuGHH24sc8AYGh&tag=jif&rating=G`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
          $('.gif-area').append(`<img src="${response.data.images.original.url}">`)
      },
      error: function() {
        $('.gif-area').text("There was an error processing your request. Please try again.")
      }
    });
  }, 2000);
  });
});
