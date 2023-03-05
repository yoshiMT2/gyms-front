import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'



const groups = [{ id: 1, title: 'カウンセリング' }, { id: 2, title: 'トレーニング' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 4,
    group: 1,
    title: 'item 4',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  }
]

// moment.locale('ja');

function Timetable() {

  return (
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
      stackItems
    >
      <TimelineHeaders>
        <SidebarHeader>
          {({ getRootProps }) => {
            return <div {...getRootProps()} />;
          }}
        </SidebarHeader>
        <DateHeader className='bg-indigo-600' unit="primaryHeader" />
        <DateHeader />
      </TimelineHeaders>
      {/* ... */}
    </Timeline>
  )
}

export default Timetable