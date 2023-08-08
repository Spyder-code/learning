<script>
  let step = 1;
  const next = () =>{
    step++;
  }

  const play = ()=>{
    var audio = new Audio('/bing.mp3');
    audio.play();
  }
</script>
<div class="card-box animate__animated animate__bounceIn" on:click={next}>
  {#if step>=1 && step<6}
    <div class="quote animate__animated animate__backInLeft">
      <span class="mdi mdi-face-man"></span>
      <p>What is <span>Event</span> in coding?</p>
    </div>
  {/if}
  {#if step>=2 && step<6}
    <div class="quote-right animate__animated animate__backInRight">
      <p>An event tells the computer <span>WHEN</span> to run the code or program</p>
      <span class="mdi mdi-face-woman"></span>
    </div>
  {/if}
  {#if step>=3 && step<6}
    <div class="quote animate__animated animate__backInLeft">
      <span class="mdi mdi-face-man"></span>
      <p>What does <span>code</span> or <span>program</span> mean?</p>
    </div>
  {/if}
  {#if step>=4 && step<6}
  <div class="quote-right animate__animated animate__backInRight">
    <p>Computer <span>code</span> or <span>program</span> are just instructions you tell the computer to do</p>
    <span class="mdi mdi-face-woman"></span>
  </div>
  {/if}
  {#if step>=5 && step<6}
    <div class="quote animate__animated animate__backInLeft">
      <span class="mdi mdi-face-man"></span>
      <p>Give me example</p>
    </div>
  {/if}
  {#if step>=6 && step<10}
  <div class="quote-right animate__animated animate__backInRight">
    <p>Okay. Let's try pressing the <span>PLAY</span> button</p>
    <span class="mdi mdi-face-woman"></span>
  </div>
  {/if}
  {#if step>=7 && step<10}
  <div class="quote animate__animated animate__backInLeft">
    <span class="mdi mdi-face-man"></span>
    <p>Done, so what happened?</p>
  </div>
  {/if}
  {#if step>=8 && step<10}
  <div class="quote-right animate__animated animate__backInRight">
    <p>Do you hear that music?</p>
    <span class="mdi mdi-face-woman"></span>
  </div>
  {/if}
  {#if step>=9 && step<10}
  <div class="quote animate__animated animate__backInLeft">
    <span class="mdi mdi-face-man"></span>
    <p>Yes</p>
  </div>
  {/if}
  {#if step>=10}
  <div class="quote-right animate__animated animate__backInRight">
    <p>When did the music start?</p>
    <span class="mdi mdi-face-woman"></span>
  </div>
  {/if}
  {#if step>=11}
  <div class="quote animate__animated animate__backInLeft">
    <span class="mdi mdi-face-man"></span>
    <p>When pressed <span>PLAY</span> button</p>
  </div>
  {/if}
  {#if step>=12}
  <div class="quote-right animate__animated animate__backInRight">
    <p>So that's it, when you press the next button and make the code is calling the function of playing music</p>
    <span class="mdi mdi-face-woman"></span>
  </div>
  {/if}
</div>
{#if step==6}
  <button on:click={play} class="icon animate__animated animate__bounce">
    <span style="font-size: 32pt;">Play</span> <span class="mdi mdi-play"></span>
  </button>
{/if}

<style>
  span.mdi{
    font-size: 40pt;
  }
  .quote{
    /* padding: 10px; */
    width: 100%;
    display: flex;
    gap: 30px;
  }
  .quote-right{
    /* padding: 10px; */
    width: 100%;
    text-align: end;
    display: flex;
    gap: 30px;
  }
  span{
    color: cornflowerblue;
  }
  button.icon{
    padding: 0px;
    background: transparent;
    border: none;
    color: white;
  }
  button.example{
    padding: 10px;
    background-color: #242424;
    border: 1px solid white;
    color: white;
  }
</style>