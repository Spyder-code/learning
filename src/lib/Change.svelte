<script>
  let name = 'html';
  let text = 
`function changeOpacity(){
  html.style.opacity = "1";
  css.style.opacity = "0.5";
  js.style.opacity = "0.5";
}`

  const getText = () =>{
    setTimeout(() => {
      if(name=='html'){
      text = 
`function changeOpacity(){
  html.style.opacity = "1";
  css.style.opacity = "0.5";
  js.style.opacity = "0.5";
}`
    }
    if(name=='css'){
      text = 
`function changeOpacity(){
  html.style.opacity = "0.5";
  css.style.opacity = "1";
  js.style.opacity = "0.5";
}`
    }
    if(name=='js'){
      text = 
`function changeOpacity(){
  html.style.opacity = "0.5";
  css.style.opacity = "0.5";
  js.style.opacity = "1";
}`
    }
    }, 1000);
  }

</script>
<div class="card-box animate__animated animate__bounceIn">
  <select on:change={getText} bind:value={name}>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">Javascript</option>
  </select>
  <hr>
  <div class="flex-center">
    <img class="img-logo" src="html.png" alt="">
  </div>
</div>
<p>When an HTML element has been changed, then run function <small>changeOpacity()</small></p>
<pre>{text}</pre>

<style>
  .img-logo{
    width: 400px;
    height: 200px;
  }
  .flex-center{
    display: flex;
    justify-content: center;
  }
  img {
    opacity: 0.3;
  }
</style>