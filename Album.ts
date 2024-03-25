 function make_album(artist:string, title: string, tracks?:number) {
    const album: {artist: string, title:string, tracks?:number} = {

        artist : artist,
        title : title
 }

 if(tracks !== undefined){
    album.tracks = tracks;
 }
      return album; 

}


if



