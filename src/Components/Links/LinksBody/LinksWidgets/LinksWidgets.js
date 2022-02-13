import React,{useState} from 'react'
import './LinksWidgets.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import LinksW_Category from './LinksW_Category';
import AddForm from '../../AddForm';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(253, 153, 65,0.7)',
        'rgba(48, 202, 152, 0.7)',
        'rgba(56, 73, 127, 0.7)',
        'rgba(88, 113, 249, 0.7)',
      ],
      borderColor: [
        'rgba(253, 153, 65,0.8)',
        'rgba(48, 202, 152, 0.8)',
        'rgba(56, 73, 127, 0.8)',
        'rgba(88, 113, 249, 0.8)',
      ],
      borderWidth: 1.5,
      spacing:30,
      borderRadius:30,
    },
  ],
};
const options = {
    plugins: {
      legend: {
        display: false,
        labels: {
            color: 'rgb(255, 99, 132)'
        }
    }

}
};

function LinksWidgets() {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='LinksWidgets'>
        <div className='LinksWidgetsChart'>
          <Doughnut data={data} options={options} />
          <span className='LinksWidgetsChartFilltext'>38%</span>
        </div>
        <div className='LinksWidgets_TopCategories'>
          <div className='LinksWidgets_TopCategory'>
            <span className='LinksWidgets_TopCategoryName'>اول</span>
            <span className='LinksWidgets_TopCategoryPercent'>17%</span>
            <div className='LinksWidgets_TopCategoryBarContainer'>
              <div className='LinksWidgets_TopCategoryBar LinksWidgets_TopCategoryBar1' style={{width:"17%"}}></div>
            </div>
          </div>
          <div className='LinksWidgets_TopCategory'>
            <span className='LinksWidgets_TopCategoryName'>اول</span>
            <span className='LinksWidgets_TopCategoryPercent'>35%</span>
            <div className='LinksWidgets_TopCategoryBarContainer'>
              <div className='LinksWidgets_TopCategoryBar LinksWidgets_TopCategoryBar2' style={{width:"35%"}}></div>
            </div>
          </div>
          <div className='LinksWidgets_TopCategory'>
            <span className='LinksWidgets_TopCategoryName'>اول</span>
            <span className='LinksWidgets_TopCategoryPercent'>80%</span>
            <div className='LinksWidgets_TopCategoryBarContainer'>
              <div className='LinksWidgets_TopCategoryBar LinksWidgets_TopCategoryBar3' style={{width:"80%"}}></div>
            </div>
          </div>
          <div className='LinksWidgets_TopCategory'>
            <span className='LinksWidgets_TopCategoryName'>اول</span>
            <span className='LinksWidgets_TopCategoryPercent'>45%</span>
            <div className='LinksWidgets_TopCategoryBarContainer'>
              <div className='LinksWidgets_TopCategoryBar LinksWidgets_TopCategoryBar4' style={{width:"45%"}}></div>
            </div>
          </div>
        </div>
        <div className='LinksWidgets_CategoriesTitles' >
          <span className='LinksWidgets_CategoriesTitle'>دسته بندی های موجود</span>
          <span className='LinksWidgets_CategoriesDescribe'> لیست دسته بندی های موجود برای لینک های ثبت شده</span>
        </div>
        <div className='LinksWidgets_Categories' >
            <LinksW_Category title="ورزشی" number={23}/>
            <LinksW_Category title="پژوهشی" number={23}/>
            <LinksW_Category title="سیاسی" number={23}/>
            <LinksW_Category title="مورد علاقه" number={23}/>
            <LinksW_Category title="خنده دار" number={23}/>
            <LinksW_Category title="شخصی" number={23}/>
            <div className='LinksWidgets_CategoriesAddButton' onClick={handleOpen} >افزودن</div>
            <AddForm open={open} setOpen={setOpen}/>
        </div>

    </div>
  )
}

export default LinksWidgets