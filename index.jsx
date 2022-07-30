/**
 * See https://developer.github.com/v3/repos/branches/#get-branch
 *
 * Example Github api request:
 * https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master
 */

 class LatestCommitComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: ""
      };
    }
  
    componentDidMount() {
      fetch(
        "https://api.github.com/repos/Zlisch/Zlisch.github.io/branches/main"
      )
        .then(response => {
          response.json().then(json => {
            console.log(json);
            this.setState({
              date: json.commit.commit.author.date
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    render() {
        // console.log(this.state.date);
        var ds = this.state.date;
        var len = ds.length;
      return (
        <div>
          <div>{'Last updated: '+ds.substring(0, 10)+' '+ds.substring(11, len-1)+' Zulu Time Zone'}</div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<LatestCommitComponent />, document.getElementById("update-date"));