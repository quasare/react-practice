function App() {
    return (
      <div>
        <Tweet
          name="joe test"
          username="jt"
          date={new Date().toDateString()}
          message="Hello world"
        />
        <Tweet
          name="Godzilla"
          username="Zilla"
          date={new Date().toDateString()}
          message="Destroy all monsters"
        />
        <Tweet
          name="Jonnie"
          username="CirclePi"
          date={new Date().toDateString()}
          message="All the squares make a circle"
        />
      </div>
    );
  }