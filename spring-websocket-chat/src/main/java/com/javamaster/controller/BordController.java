package com.javamaster.controller;

import com.javamaster.model.AxisModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BordController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/bord/{to}")
    public void drow(@DestinationVariable String to, AxisModel axisModel) {
        System.out.println("handling send message: " + axisModel + " to: " + to);
        System.out.println("hellllllllooooooooooooooooooo");
        simpMessagingTemplate.convertAndSend("/topic/messages/" + to, axisModel);
    }

}
