/* lab-video.js — embed a YouTube video with an automatic poster fallback.
   If the video is unavailable or blocks embedding, or the IFrame API fails to
   load, the module's poster image is shown instead (never a YouTube error box).
   Usage: LabVideo.mount(containerEl, {id, poster, alt, search}). id may be null
   to show the poster only (linked to a YouTube search). */
(function(){
  var apiLoading=false, queue=[];
  function loadApi(cb){
    if(window.YT && window.YT.Player){ cb(); return; }
    queue.push(cb);
    if(apiLoading) return;
    apiLoading=true;
    var prev=window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady=function(){
      if(typeof prev==='function'){try{prev();}catch(e){}}
      var q=queue; queue=[]; q.forEach(function(f){try{f();}catch(e){}});
    };
    var s=document.createElement('script');
    s.src='https://www.youtube.com/iframe_api';
    s.onerror=function(){ var q=queue; queue=[]; q.forEach(function(f){try{f(true);}catch(e){}}); };
    document.head.appendChild(s);
  }
  function poster(container,opts){
    var href = opts.id ? 'https://www.youtube.com/watch?v='+opts.id
                       : (opts.search || 'https://www.youtube.com/results?search_query=lab+safety');
    var a=document.createElement('a');
    a.className='video-poster'; a.href=href; a.target='_blank'; a.rel='noopener';
    var img=document.createElement('img'); img.src=opts.poster; img.alt=opts.alt||'Watch video';
    a.appendChild(img);
    container.innerHTML=''; container.appendChild(a);
  }
  window.LabVideo={
    mount:function(container,opts){
      if(!container) return;
      opts=opts||{};
      if(!opts.id){ poster(container,opts); return; }
      container.innerHTML='<div class="lv-frame"><div class="lv-player"></div></div>';
      var target=container.querySelector('.lv-player');
      var settled=false;
      var fail=function(){ if(settled) return; settled=true; poster(container,opts); };
      var ok=function(){ settled=true; };
      var to=setTimeout(function(){ if(!window.YT || !window.YT.Player) fail(); }, 7000);
      loadApi(function(err){
        if(err){ clearTimeout(to); fail(); return; }
        try{
          new YT.Player(target,{
            videoId:opts.id, host:'https://www.youtube-nocookie.com',
            playerVars:{rel:0,modestbranding:1,playsinline:1},
            events:{ onReady:function(){clearTimeout(to);ok();}, onError:function(){clearTimeout(to);fail();} }
          });
        }catch(e){ clearTimeout(to); fail(); }
      });
    }
  };
})();
