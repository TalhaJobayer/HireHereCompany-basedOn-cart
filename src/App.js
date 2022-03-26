import logo from './logo.svg';
import './App.css';

import MainBody from './Component/MainBody/MainBody';


function App() {
  return (
    <div className="App">
    <MainBody></MainBody>
    <div>
      <h1>How React Works?</h1>
      <p><b>Answer:</b> জাভাস্ক্রিপ্ট কোড কে HTML এ কনভার্ট করার জন্য রিয়াক্ট এর প্রয়োজন হয়।রিয়াক্ট ,কম্পনেন্ট কে জা বেসিক্যালি এক্টি পিওর জাভাস্ক্রিপ্ট কোড তা HTML কনভার্ট করে।এই রুপান্তরিতো  HTML কোডটিকে  HTML ফাইলে ইঞ্জেক্ট করে react DOM এর সাহায্যে ।এবং এই পুরো প্রোসেস টা ডাইন্যামিক্যালি  বা কোনো রিলোড চারা সম্পন্ন হয়।এই জন্য রিয়াক্ট ইন্সট্যান্টলি এবং অনেক ফাস্ট কাজ করে।</p>
    </div>
    <div>
      <h1>Props VS State?</h1>
      <h3>Props:
        <ul>
          <li>props are immutable</li>
          <li>we can pass proerties from parent components</li>
          <li>determine hte view creation and then they remain static</li>
        </ul>
      </h3>
      <h3>State:
        <ul>
          <li>state are mutabele</li>
          <li>we can define states in the component itself</li>
          <li>the state is set and updated by object</li>
        </ul>
      </h3>

    </div>
    </div>
  );
}

export default App;
