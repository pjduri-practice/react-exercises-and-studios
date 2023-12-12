import {choresText, choresHeading} from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <>
      <h3 className={choresHeading}>Chores</h3>
      <ul className={choresText}>
         <li>Deeper Dive into SQL Joins</li>
         <li>Finish React Chapters</li>
         <li>Laundry</li>
      </ul>
      </>
   )
}