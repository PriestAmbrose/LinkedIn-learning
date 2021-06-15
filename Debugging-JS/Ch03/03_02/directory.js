(function () {
  "use strict";

  // Wrap useState so we can see the names of state hooks
  function useStateWithLabel(initialValue, name) {
    const [value, setValue] = React.useState(initialValue);
    React.useDebugValue(name);
    return [value, setValue];
  }

  function Person(props) {
    return (
      <div className="person">
        <h3>
          {props.person.name}, {props.person.title}
        </h3>

        <p>
          <img
            className="size-medium alignright"
            src={props.person.img}
            alt={props.person.name}
            width="300"
            height="300"
            sizes="(max-width: 300px) 100vw, 300px"
          />

          {props.person.bio}
        </p>
      </div>
    );
  }

  function People(props) {
    return (
      <div className="results">
        <ReactTransitionGroup.TransitionGroup>
          {props.people.map(function (person) {
            return (
              <ReactTransitionGroup.CSSTransition
                key={person.id}
                classNames={{
                  enter: "animated",
                  enterActive: "zoomIn",
                  exit: "animated",
                  exitActive: "zoomOut",
                }}
                timeout={1000}
              >
                <Person person={person} />
              </ReactTransitionGroup.CSSTransition>
            );
          })}
        </ReactTransitionGroup.TransitionGroup>
      </div>
    );
  }

  function Filters(props) {
    var titles = window.LMDirectory.titles;

    function updateName(evt) {
      props.updateFormState({ key: "currentName", value: evt.target.value });
    }

    function updateTitle(evt) {
      props.updateFormState({ key: "currentTitle", value: evt.target.value });
    }

    function updateIntern(evt) {
      props.updateFormState({ key: "isIntern", value: evt.target.checked });
    }

    function resetFilters() {
      props.updateFormState({ key: "currentName", value: "" });
      props.updateFormState({ key: "currentTitle", value: "" });
      props.updateFormState({ key: "isIntern", value: false });
    }

    return (
      <form action="" id="directory-filters">
        <div className="group">
          <label htmlFor="person-name">Name:</label>
          <input
            type="text"
            name="person_name"
            placeholder="Name of employee"
            id="person-name"
            value={props.currentName}
            onChange={updateName}
          />
        </div>
        <div className="group">
          <label htmlFor="person-title">Job Title:</label>
          <select
            name="person_title"
            id="person-title"
            value={props.currentTitle}
            onChange={updateTitle}
          >
            <option value="">- Select -</option>
            {titles.map(function (title) {
              return (
                <option value={title.key} key={title.key}>
                  {title.display}
                </option>
              );
            })}
          </select>
        </div>
        <div className="group">
          <label>
            <input
              type="checkbox"
              value="1"
              name="person_intern"
              checked={props.isIntern}
              onChange={updateIntern}
            />
            Intern
          </label>
        </div>
        <div className="group">
          <input type="reset" value="Reset" onClick={resetFilters} />
        </div>
      </form>
    );
  }

  function Directory(props) {
    var [visiblePeople, setVisiblePeople] = useStateWithLabel(
      [],
      "visiblePeople"
    );
    var [jobTitles, setJobTitles] = useStateWithLabel([], "jobTitles");
    var [currentName, setCurrentName] = useStateWithLabel("", "currentName");
    var [currentTitle, setCurrentTitle] = useStateWithLabel("", "currentTitle");
    var [isIntern, setIsIntern] = useStateWithLabel(false, "isIntern");
    var [isLoaded, setIsLoaded] = useStateWithLabel(false, "isLoaded");

    // cache all people so we don't have to keep querying the data
    var [allPeople, setAllPeople] = React.useState([]);

    // Fetch the data we need on initial render
    React.useEffect(function () {
      axios.get("./directory-data.json").then(function initDirectory(response) {
        setAllPeople(response.data.people);
        setVisiblePeople(response.data.people);
        setJobTitles(response.data.titles);
      });
    }, []);

    // search the whole employee list with current filters
    function updatePeopleList() {
      var filteredPeople = allPeople.filter(function (person) {
        return (
          person.intern === isIntern &&
          (currentName === "" ||
            person.name.toLowerCase().indexOf(currentName.toLowerCase()) !==
              -1) &&
          (currentTitle === "" || person.title_cat === currentTitle)
        );
      });

      setVisiblePeople(filteredPeople);
    }

    function updateFormState({ key, value }) {
      switch (key) {
        case "currentName":
          setCurrentName(value);
          break;
        case "currentTitle":
          setCurrentTitle(value);
          break;
        case "isIntern":
          setIsIntern(value);
          break;
      }
    }

    // Update the visible people data when the filters change
    React.useEffect(
      function () {
        updatePeopleList();
      },
      [currentName, currentTitle, isIntern]
    );

    let peopleOrLoading = null;
    if (isLoaded) {
      peopleOrLoading = <People people={visiblePeople} />;
    } else {
      peopleOrLoading = <div className="loading">Loading…</div>;
    }

    return (
      <div className="company-directory">
        <h2>Company Directory</h2>
        <p>
          Learn more about each person at Leaf &amp; Mortar in this company
          directory.
        </p>

        <Filters
          currentName={currentName}
          currentTitle={currentTitle}
          isIntern={isIntern}
          updateFormState={updateFormState}
        />

        {peopleOrLoading}
      </div>
    );
  }

  ReactDOM.render(<Directory />, document.getElementById("directory-root"));
})();
