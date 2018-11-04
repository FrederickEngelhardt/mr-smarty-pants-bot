<template>
    <section class="container">
        <svg class="robot-head" width="365" height="349" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="Left-Antenna">
                    <path id="Rectangle-5" fill="#3E4347" d="M16 287h19v12H16z"/>
                    <path id="Rectangle-6" fill="#3E4347" d="M16 43h12v256H16z"/>
                    <circle id="Oval-3" :class="{flash: isListening}" class="left-ant" cx="22" cy="22" r="22"/>
                    <rect id="Left-Antenna-Mount" fill="#89957B" x="35" y="262" width="13" height="61" rx="6.5"/>
                </g>
                <g id="Right-Antenna" transform="translate(317)">
                    <path id="Rectangle-5-Copy" fill="#3E4347" d="M13 287h19v12H13z"/>
                    <path id="Rectangle-6-Copy" fill="#3E4347" d="M20 43h12v256H20z"/>
                    <circle id="Oval-3-Copy" :class="{flash: isListening}" class="right-ant" cx="26" cy="22" r="22"/>
                    <rect id="Right-Antenna-Mount" fill="#89957B" y="262" width="13" height="61" rx="6.5"/>
                </g>
                <rect id="Head-Copy" fill="#B6C3A8" x="43" y="69" width="280" height="280" rx="21"/>
                <g id="Left-Eye" transform="translate(65 100)">
                    <circle id="Oval" stroke="#F0FEDB" stroke-width="10" fill="#545B61" cx="52" cy="52" r="52"/>
                    <circle class="left-eye__pupil" id="Oval-2" fill="#FB5667" cx="52" cy="52" r="15"/>
                </g>
                <g id="Right-Eye" transform="translate(197 100)">
                    <circle id="Oval" stroke="#F0FEDB" stroke-width="10" fill="#545B61" cx="52" cy="52" r="52"/>
                    <circle class="right-eye__pupil" id="Oval-2" fill="#FB5667" cx="52" cy="52" r="15"/>
                </g>
                <g id="Mouth-Copy" transform="translate(64 248)">
                    <path :class="{talk: isTalking}" class="robot-head__lips"
                          d="M35 4.5C18.155 4.5 4.5 18.155 4.5 35S18.155 65.5 35 65.5h169c16.845 0 30.5-13.655 30.5-30.5S220.845 4.5 204 4.5H35z"
                          id="Lips" stroke="#F0FEDB" stroke-width="9"/>
                    <g id="Teeth" transform="translate(32 14)" fill="#555C56">
                        <rect id="Rectangle-3" width="10" height="42" rx="5"/>
                        <rect id="Rectangle-3-Copy" x="33" width="10" height="42" rx="5"/>
                        <rect id="Rectangle-3-Copy-5" x="66" width="10" height="42" rx="5"/>
                        <rect id="Rectangle-3-Copy-2" x="165" width="10" height="42" rx="5"/>
                        <rect id="Rectangle-3-Copy-3" x="99" width="10" height="42" rx="5"/>
                        <rect id="Rectangle-3-Copy-4" x="132" width="10" height="42" rx="5"/>
                    </g>
                </g>
                <g id="Nose-Screw-Copy" transform="translate(171 204)">
                    <circle id="Oval-4" fill="#F5F5F5" cx="12" cy="12" r="12"/>
                    <path d="M.918 9.834h22a1 1 0 0 1 1 1v2.054a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-2.054a1 1 0 0 1 1-1z"
                          id="Rectangle-7" fill="#545B61" transform="rotate(121 11.918 11.861)"/>
                </g>
            </g>
        </svg>
        <svg class="speech-bubble" width="500" height="320" viewBox="90 0 300 320" preserveAspectRatio="xMidYMid meet"
             xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="filter1">
                    <feDropShadow dx="7" dy="10" flood-color="#000" flood-opacity="0.3" height="180%" stdDeviation="5"/>
                </filter>
            </defs>

            <path class="speech-bubble__outline" style="filter:url(#filter1);"
                  d="m10.695 222.115 68.305 25.368v11.517c0 8.837 7.163 16 16 16h342c8.837 0 16-7.163 16-16v-238c0-8.837-7.163-16-16-16h-342c-8.837 0-16 7.163-16 16v149.276l-69.31 37.295a8 8 0 0 0 1.005 14.544z"
                  fill="#fff" fill-rule="evenodd" stroke-width="10"/>
        </svg>
        <div class="speech-bubble_text-box">
            <h1 class="speech-bubble__text">
                {{ message }}
            </h1>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'MrSmartyPants',
    props: {
      isListening: {
        type: Boolean,
        default: false
      },
      isTalking: {
        type: Boolean,
        default: false
      },
      message: {
        type: String
      }
    }
  }
</script>

<style scoped>
    .container {
        position: relative;
    }

    .robot-head {
        margin-bottom: 40px;
    }

    .speech-bubble {
        margin-left: -75px;
    }

    .speech-bubble__outline {
        stroke: #3e4347;
    }

    .speech-bubble_text-box {
        position: absolute;
        right: 43px;
        top: 80px;
        width: 360px;
        height: 255px;
        overflow: scroll;
    }

    .speech-bubble__text {
        color: #3e4347;
        font-size: 28px;
        font-weight: 600;
        margin: 10px;
    }

    .left-eye__pupil,
    .right-eye__pupil {
        animation: look 8s ease-out infinite;
    }

    .robot-head__lips {
        fill: #89957B;
    }

    .robot-head__lips.talk {

        animation: talk 100ms linear infinite alternate;
    }

    .right-ant {
        fill: #FB5667;
    }

    .left-ant {
        fill: #FB5667;
    }

    .left-ant.flash,
    .right-ant.flash {
        animation: listening 200ms infinite alternate linear;
    }


    @keyframes talk {
        100% {
            fill: orange;
        }
    }

    @keyframes look {
        0% {
            transform: none;
        }
        25% {
            transform: translate(20px, 20px);
        }
        50% {
            transform: none;
        }
        75% {
            transform: translate(-20px, 20px);
        }
        100% {
            transform: none;
        }
    }

    @keyframes listening {
        to {
            fill: #E04C5B;
        }
    }
</style>
