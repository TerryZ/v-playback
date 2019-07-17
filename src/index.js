import video from './Playback';

const Plugin = {
    install(Vue, options = {}){
        if(Object.keys(options).length){
            if(typeof(options.language) === 'string') video.props.language.default = options.language;
            if(typeof(options.loop) === 'boolean') video.props.loop.default = options.loop;
            if(typeof(options.autoPlay) === 'boolean') video.props.autoPlay.default = options.autoPlay;
        }
        Vue.component(video.name, video);
    }
};

export default Plugin;