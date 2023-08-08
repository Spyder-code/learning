<script>
  let is_on = false;
  let text = '';
  const toggle = ()=>{
    is_on = !is_on;
    if(is_on){
      text = 
`funtion turnOn(){
  light.src = 'turn-on.png'
}`;
    }else{
      text = 
`funtion turnOff(){
  light.src = 'turn-off.png'
}`;
    }
  }

</script>
<div class="card-box animate__animated animate__bounceIn">
  <div class="flex-center">
    {#if is_on}
      <img class="img-logo" src="on.png" alt="">
    {:else}
      <img class="img-logo" src="off.png" alt="">
    {/if}
  </div>
  <div class="text-center">
    <button on:click={toggle}>TURN {is_on?'OFF':'ON'}</button>
  </div>
</div>
<p>The user clicks an button</p>
<pre>{text}</pre>

<style>
  .img-logo{
    width: 184px;
    height: 300px;
  }
  .flex-center{
    display: flex;
    justify-content: center;
  }
  button{
    cursor: pointer;
    color: white;
    background: transparent;
    width: 300px;
    padding: 10px 0px;
    font-size: 15pt;
    margin-top: 40px;
    border: 1px solid white;
    box-shadow: rgba(255, 255, 255, 0.707) 0px 5px 15px;
  }
  button:hover{
    cursor: pointer;
    color: cornflowerblue;
    background: transparent;
    width: 300px;
    padding: 10px 0px;
    font-size: 15pt;
    margin-top: 40px;
    border: 1px solid cornflowerblue;
    box-shadow: rgba(255, 255, 255, 0.707) 0px 5px 15px;
  }
</style>