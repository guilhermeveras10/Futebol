import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NoticiaProvider } from '../../providers/noticia/noticia';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  
  public videos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public noticiaProvider: NoticiaProvider, private streamingMedia: StreamingMedia) {
    noticiaProvider.getVideo().subscribe(snapshot => {
      this.videos = snapshot.reverse();
      console.log(this.videos);
    });
  }

  startVideo(url) {
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log()},
      errorCallback: () => {console.log()},
      orientation: 'portrait'
    }
    this.streamingMedia.playVideo(url, options);
  }
}
