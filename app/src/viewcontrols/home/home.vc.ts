import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import EntriesService from '../../services/entries/entries.svc';
import PostsRepository from '../../repositories/posts/posts.repo';

export default class HomeViewControl extends BaseViewControl {
    
    constructor(private entriesService: EntriesService) {
        super();
    };
    templateString: string = require('./home.vc.html');
     
    context: any = {
        posts: <Array<models.IPost>>[]
    };
    
    navigatedTo(): void {
        this.entriesService.getPosts().then((posts) => {
            console.log(posts);
            this.context.posts = posts;
        })
    }
    
    
}
console.log("Hello world");

register.viewControl('home-vc', HomeViewControl, [EntriesService]);
