import WebVideoCreator, { VIDEO_ENCODER } from "web-video-creator";
(async () => {

    const wvc = new WebVideoCreator();
    wvc.config({
        mp4Encoder: VIDEO_ENCODER.VIDEOTOOLBOX.H264,
        compatibleRenderingMode: true
    });

    const video = wvc.createSingleVideo({
        width: 800,
        height: 800,
        duration: 10000,
        content: "<h1 style=\"color:#fff\">测试</h1>",
        showProgress: true,
        outputPath: "t.mp4"
    });

    await video.startAndWait();
})()
.catch(err => console.error(err));