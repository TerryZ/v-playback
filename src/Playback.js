import videojs from 'video.js';
// user imports-loader
//import 'imports-loader?videojs=video.js!video.js/dist/lang/zh-CN';
import 'video.js/dist/video-js.css';
export default {
    name: "v-playback",
    render(h){
        if(this.url){
            return h('video',{
                attrs:{
                    'id':'videoPlayerContainer',
                    'data-setup':'{}'
                },
                class:'video-js vjs-default-skin vjs-big-play-centered vjs-16-9'
            },[
                h('source',{
                    attrs:{
                        src: this.url,
                        type: 'video/mp4'
                    }
                })
            ]);
        }
    },
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
        /**
         * autoplay
         * play  - autoplay start
         * muted - autoplay with muted
         */
        autoPlay: {
            type: [Boolean, String],
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
                autoplay: 'play',
                preload: 'auto',
                language: this.language
            }
        };
    },
    watch: {
        url(val){
            this.play();
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
        },
        play(){
            this.$nextTick(()=>{
                if(this.url) this.getPlayer();
            });
        }
    },
    beforeMount(){
        if(this.poster) this.options.poster = this.poster;
    },
    mounted(){
        try{
            //load custom language data
            //require(`imports-loader?videojs=video.js!video.js/dist/lang/${this.language}`)
            /* eslint-disable */
        }catch (e) {}

        this.play();
    },
    beforeDestroy(){
        videojs('videoPlayerContainer').dispose();
    }
}