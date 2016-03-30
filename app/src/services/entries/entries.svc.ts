import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class EntriesService extends BaseService {
    
    getPosts(): async.IAjaxThenable<Array<models.IPost>> {
        return this.http.json<Array<models.IPost>>({
            method: 'GET',
            url: this.host + '/posts',
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
            
        });
    }
    
    submitPost(blogPost: models.IPost): async.IAjaxThenable<string> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts',
            data: blogPost
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    getPost(postId: string): async.IAjaxThenable<models.IPost> {
        return this.http.json<models.IPost>({
            method: 'GET',
            url: this.host + '/posts/' + postId
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;  
        });
    }
}

register.injectable('entries-svc', EntriesService);
