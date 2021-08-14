<div className="container-fluid facultyList">
        <div className="container-fluid">
          <div className="row">
            <div
              className={
                isTeacher
                  ? "teachersContainer col-lg-12 "
                  : "col-lg-12  notTeacher"
              }
            >
              <div className="row">
                {teachersList.map((data, i) => (
                  <div key={data.id} className="col-lg-4 col-md-6">
                    {/* <Grow> */}
                    <StaffList
                      name={data.name}
                      designation={data.designation}
                      email={data.email}
                      imageLink={data.photoURL}
                    />
                    {/* </Grow> */}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={
                isTeacher ? "notStaff col-lg-12 " : "col-lg-12  staffsContainer"
              }
            >
              <div className="row">
                {staffsList.map((data, i) => (
                  <div key={data.id} className="col-lg-4  col-md-6">
                    {/* <Grow> */}
                    <StaffList
                      name={data.name}
                      designation={data.designation}
                      email={data.email}
                      imageLink={data.photoURL}
                    />
                    {/* </Grow> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>