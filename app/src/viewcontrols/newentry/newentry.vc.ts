import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import EntriesService from '../../services/entries/entries.svc';

export default class NewentryViewControl extends BaseViewControl {
    templateString: string = require('./newentry.vc.html');

    context: any = {};
}

register.viewControl('newentry-vc', NewentryViewControl);
