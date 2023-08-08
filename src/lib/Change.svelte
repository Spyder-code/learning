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
    <div class="text-center">
      <img class="img-logo {name=='html'?'active':''}" src="/html.png" alt=""><br>
      <b>HTML</b>
    </div>
    <div class="text-center">
      <img class="img-logo {name=='css'?'active':''}" src="/css.png" alt=""><br>
      <b>CSS</b>
    </div>
    <div class="text-center">
      <img class="img-logo {name=='js'?'active':''}" src="/js.png" alt=""><br>
      <b>JS</b>
    </div>
  </div>
</div>
<p>When an HTML element has been changed, then run function <small>changeOpacity()</small></p>
<pre>{text}</pre>

<style>
  .img-logo{
    width: 200px;
    height: 200px;
    opacity: 0.2;
  }
  .img-logo.active{
    opacity: 1;
  }
  .flex-center{
    display: flex;
    justify-content: center;
    gap: 30px;
  }
</style>