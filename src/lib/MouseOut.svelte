<script>
  let title = '';
  let text = '';
  const overElement = (name)=>{
    title = name;
    text = 
`funtion mouseOver(){
  element.innerHTML = 'The mouse over an ${title} box';
}`;
  }

  const outElement = ()=>{
    title = '';
    text = 
`funtion mouseOut(){
  element.innerHTML = 'The mouse out of box';
}`;
  }
</script>
<div class="card-box animate__animated animate__bounceIn">
  <div class="flex-row">
    <div class="box" on:mouseout={outElement} on:mouseover={()=>overElement('HTML')}>
      HTML
    </div>
    <div class="box" on:mouseout={outElement} on:mouseover={()=>overElement('CSS')}>
      CSS
    </div>
    <div class="box" on:mouseout={outElement} on:mouseover={()=>overElement('JS')}>
      JS
    </div>
  </div>
  <hr>
  {#if title}
    <p>The mouse over an <span>{title}</span> box</p>
    <pre>{text}</pre>
  {:else}
    <p>The mouse out of box</p>
    <pre>{text}</pre>
  {/if}
</div>

<style>
  span{
    color: cornflowerblue;
  }
  .img-logo{
    width: 400px;
    height: 200px;
  }
  .flex-row{
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .box{
    width: 200px;
    padding: 30px 20px;
    background-color: antiquewhite;
    color: black;
    text-align: center;
    vertical-align: middle;
    font-size: 50pt;
  }
  .box:hover{
    color: wheat;
    background-color: transparent;
    border: 1px solid white;
    box-shadow: rgba(255, 255, 255, 0.707) 0px 5px 15px;
  }
</style>