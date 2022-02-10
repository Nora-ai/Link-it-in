
export default function JobEdit(props) {

       
    const {company, setCompany, position, setPosition, salary, setSalary, 
        link, setLink, status, setStatus, appProcess, setAppProcess, 
        techAss, setTechAss, nextRound, setNextRound, 
        final, setFinal, notes, setNotes } = props
    // console.log(props.company)

    return(<>

        <form>
            <label>
                Company:
            <input 
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            </label>
            <label>
                Position:
            <input 
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            </label>
            <label>
                Salary:
            <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            </label>
            <label>
                Link:
            <input 
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            </label>
            {/* <label>
                Date Added:
            <input 
                type="text"
                value=""
                // onChange={(e) => setLink(e.target.value)}
            />
            </label> */}
            <label>
                Status:
            <input 
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            </label>
            <label>
                Application Process:
            <input 
                type="text"
                value={appProcess}
                onChange={(e) => setAppProcess(e.target.value)}
            />
            </label>
            <label>
                Tech Assessment:
            <input 
                type="text"
                value={techAss}
                onChange={(e) => setTechAss(e.target.value)}
            />
            </label>
            <label>
                Next Round:
            <input 
                type="text"
                value={nextRound}
                onChange={(e) => setNextRound(e.target.value)}
            />
            </label>
            <label>
                Final Interview:
            <input 
                type="text"
                value={final}
                onChange={(e) => setFinal(e.target.value)}
            />
            </label>
            <label>
                Notes:
            <input 
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            </label>
             

        </form>
        
    
    
    
    </>)
}