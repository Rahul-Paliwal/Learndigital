class AppUrl{
    static BaseURL = 'http://127.0.0.1:8000/api'

    static HomeTopBanner = this.BaseURL+'/home/title';
    static HomeDescription = this.BaseURL+'/home/description';
    static HomeAnalysis = this.BaseURL+'/home/analysis';
    static HomeVideo = this.BaseURL+'/home/video';


    static ProjectDetails = this.BaseURL+'/projectdetails';
    static ProjectAll = this.BaseURL+'/projectall';
    static ProjectHome = this.BaseURL+'/projecthome';

    static Services = this.BaseURL+'/services';

    static InfoData = this.BaseURL+'/infodata';

    static FooterData = this.BaseURL+'/footerdata';

    static CourseDetails = this.BaseURL+'/coursedetails';
    static CourseAll = this.BaseURL+'/courseall';
    static CourseHome = this.BaseURL+'/coursehome';

    static ContactSend = this.BaseURL+'/contactsend';
    static ClientReview = this.BaseURL+'/clientreview';
    static ChartData = this.BaseURL+'/chartdata';


}

export default AppUrl;