/* Hide the default radio button */
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  outline: none; /* Remove focus outline */
}

/* Customize the radio button appearance */
input[type="radio"] + label:before {
  content: '';
  display: inline-block;
  width: 20px; /* Set your desired width */
  height: 20px; /* Set your desired height */
  border-radius: 50%; /* Make it circular */
  border: 2px solid