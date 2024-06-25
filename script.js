var iTunes=[{artistId:180519654,songName:"Mast Kalander",trackId:836700063,artistName:"Mika Singh & Yo Yo Honey Singh",previewUrl:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9e/19/52/9e1952ac-cf52-0f3b-c2c8-d3584c4a1d50/mzaf_4310740996409189531.plus.aac.p.m4a"},{artistId:180519654,songName:"Bas Ek Kinng",trackId:836700064,artistName:"Mika Singh, Neeraj Shridhar, Ashish Pandit & Hard Kaur",previewUrl:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3d/7b/6e/3d7b6e51-5fbb-9686-5537-161b530b056f/mzaf_11226100653062571467.plus.aac.p.m4a"},{artistId:180519654,songName:"Bhootni Ke",trackId:836700067,artistName:"Mika Singh",previewUrl:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7d/24/79/7d24796e-fc7f-8107-6738-3fee0d4e10a1/mzaf_1605202356317057310.plus.aac.p.m4a"},{artistId:180519654,songName:"Singh Is Kinng",trackId:836700069,artistName:"Mika Singh, Neeraj Shridhar, Ashish Pandit & Hard Kaur",previewUrl:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d9/74/ca/d974ca58-c798-4c70-bcf8-61ce4b54b1f7/mzaf_4111262706368511049.plus.aac.p.m4a"},{artistId:327458419,songName:"Taang Uthake",trackId:1158775577,artistName:"Sohail Sen & Mika Singh",previewUrl:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/18/48/bc/1848bcdd-e9be-c245-6a0c-0923a8775c19/mzaf_29072734382849405.plus.aac.p.m4a"}];
let body=document.querySelector('body');
for(let iTune of iTunes){
    let div=document.createElement('div');
    var html=`<div>
    <p>${iTune.artistId} ${iTune.songName} <br> ${iTune.artistName}</p>
    <audio src='${iTune.previewUrl}' controls></audio>
    </div>`
    div.innerHTML=html;
    body.appendChild(div);   
}