function formatDuration (seconds) {
    let years = Math.floor(seconds/31536000)
    seconds = seconds%31536000;
    let days = Math.floor(seconds/86400);
    seconds = seconds%86400;
    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor((seconds%3600)/60)
    let seconds2 = seconds%60;
    let arr = [];
    console.log(years)
    console.log('segment 1')
    if(years>0){
      if(years > 1 && days > 0){
        arr.push(`${years}`)
        arr.push(' years, ')
      } else if(years > 1 && days == 0){
        arr.push(`${years}`)
        arr.push(' years')
      } else if(years < 1 && days > 0){
        arr.push(`${years}`)
        arr.push(' year, ')
      } else if(years < 1 && days ==0){
        arr.push(`${years}`)
        arr.push(' year')
      } else if (years == 1 && days > 0){
        arr.push(`${years}`)
        arr.push(' year, ')
      } else if (years == 1 && hours == 0){
        arr.push(`${days}`)
        arr.push(' year')
      }
    }


      console.log('segment 2')
    if(days>0){
      if(days > 1 && hours > 0){
        arr.push(`${days}`)
        arr.push(' days, ')
      } else if(days > 1 && hours == 0){
        arr.push(`${days}`)
        arr.push(' days')
      } else if(days < 1 && hours > 0){
        arr.push(`${days}`)
        arr.push(' day, ')
      } else if(days < 1 && hours ==0){
        arr.push(`${days}`)
        arr.push(' day')
      } else if (days == 1 && hours > 0){
        arr.push(`${days}`)
        arr.push(' day, ')
      } else if (days == 1 && hours == 0){
        arr.push(`${days}`)
        arr.push(' day')
      }
    }
    console.log('segment 3')
    if(hours > 0){
      if(hours > 1 && minutes > 0){
        arr.push(`${hours}`)
        arr.push(' hours, ')
      } else if(hours > 1 && minutes == 0){
        arr.push(`${hours}`)
        arr.push(' hours')
      } else if(hours < 1 && minutes > 0){
        arr.push(`${hours}`)
        arr.push(' hour, ')
      } else if(hours < 1 && minutes ==0){
        arr.push(`${hours}`)
        arr.push(' hour')
      } else if (hours == 1 && minutes > 0){
        arr.push(`${hours}`)
        arr.push(' hour, ')
      } else if (hours == 1 && minutes == 0){
        arr.push(`${hours}`)
        arr.push(' hour')
      }
    }
    console.log('segment 4')
    if(minutes > 0){
      if(minutes>1 && seconds2 == 0){
        arr.push(`${minutes}`)
        arr.push(' minutes ')
      } else if(minutes>1 && seconds2 > 0){
        arr.push(`${minutes}`)
        arr.push(' minutes and ')
      } else if (minutes<1 && seconds2 == 0){
        arr.push(`${minutes}`)
        arr.push(' minute ')
      } else {
        arr.push(`${minutes}`)
        arr.push(' minute and ')
      }
    }
    console.log('segment 5')
    if(seconds2 > 0){
      if(seconds2 > 1){
        arr.push(`${seconds2}`)
        arr.push(" seconds")
      } else {
        arr.push(`${seconds2}`)
        arr.push(" second ")
      }
    }
      
    let str = arr.join('');
    console.log(arr)
    str = str.trim();
    console.log(str)
    if(str == ""){
      return "now";
    }
    return str;
    }
  

  console.log(formatDuration(3600))