package com.video.youtube;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by rizwan on 5/11/17.
 */

public class YoutubeModule extends ReactContextBaseJavaModule {

    public YoutubeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @ReactMethod
    public void ShowToast(String msg){
        Toast.makeText(getCurrentActivity(),msg,Toast.LENGTH_SHORT).show();
    }

    @Override
    public String getName() {
        return "YoutubeModule";
    }
}
