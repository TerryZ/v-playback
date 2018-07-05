<template>
    <div>
        <video id="videoPlayerContainer"
               class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
               data-setup='{}' v-if="url" >
            <source :src="url" type='video/mp4' />
        </video>
    </div>
</template>

<script>
    import videojs from 'video.js';
    // user imports-loader
    //import 'imports-loader?videojs=video.js!video.js/dist/lang/zh-CN';
    import 'video.js/dist/video-js.css';
    export default {
        name: "v-playback",
        props: {
            url: {
                type: String,
                required: true
            },
            language: {
                type: String,
                default: 'zh-CN'
            },
            loop: {
                type: Boolean,
                default: false
            },
            autoPlay: {
                type: Boolean,
                default: false
            },
            poster: String
        },
        data(){
            return {
                options: {
                    fluid: true,
                    techOrder: ["html5"],
                    controls: true,
                    loop: this.loop,
                    autoplay: this.autoplay,
                    preload: 'auto'
                }
            };
        },
        watch: {
            url(val){
                this.$nextTick(()=>{
                    if(val) this.getPlayer();
                });
            }
        },
        methods: {
            getPlayer(){
                let that = this;
                videojs('videoPlayerContainer', this.options, function(){
                    this.on('play',function(){
                        that.$emit('play', this);
                    });
                    this.on('pause',function(){
                        that.$emit('pause', this);
                    });
                    this.on('ended',function(){
                        that.$emit('end', this);
                    });
                });
            }
        },
        beforeMount(){
            if(this.poster) this.options.poster = this.poster;
        },
        mounted(){
            try{
                //load custom language data
                require(`imports-loader?videojs=video.js!video.js/dist/lang/${this.language}`)
            }catch (e) {}

            if(this.url) this.getPlayer()
        },
        beforeDestroy(){
            videojs('videoPlayerContainer').dispose();
        }
    }
</script>